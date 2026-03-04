import { NextRequest, NextResponse } from "next/server";

/**
 * Génère une URL d'aperçu (screenshot) pour une URL de projet.
 * Utilise Microlink (gratuit, sans clé pour usage raisonnable).
 */
export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url || !url.startsWith("http")) {
    return NextResponse.json({ error: "URL invalide" }, { status: 400 });
  }

  try {
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`;
    const res = await fetch(apiUrl, { next: { revalidate: 86400 } }); // cache 24h
    const data = (await res.json()) as { data?: { screenshot?: { url?: string } }; status?: string };

    const screenshotUrl = data?.data?.screenshot?.url;
    if (screenshotUrl) {
      return NextResponse.redirect(screenshotUrl, 302);
    }
  } catch {
    // ignore
  }

  return NextResponse.json({ error: "Aperçu indisponible" }, { status: 502 });
}
