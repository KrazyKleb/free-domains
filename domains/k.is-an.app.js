addSubDomain({
  description: 'Personal site',
  domain: 'is-an.app',
  subdomain: 'k',
  owner: {
    repo: 'private',
    email: 'krazykleb@outlook.com',
  },
  record: {
    CNAME: 'krazykleb.github.io',
    NS: ['tina.ns.cloudflare.com', 'zues.ns.cloudflare.com'],
  },
})
