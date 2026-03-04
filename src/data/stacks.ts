export interface StackCategory {
  title: string;
  items: string[];
}

export const stacks: StackCategory[] = [
  {
    title: "Infrastructure",
    items: ["Linux", "Windows", "Nutanix", "Active Directory"],
  },
  {
    title: "DevOps",
    items: ["Docker", "k3s", "Ansible", "Git"],
  },
  {
    title: "Observabilité / SecOps",
    items: ["Zabbix", "Prometheus", "Grafana", "Graylog"],
  },
  {
    title: "Dev & IA",
    items: ["Python", "API", "SaaS", "LLM", "RAG"],
  },
];
