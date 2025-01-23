const pageConfig = {
  // Title for your status page
  title: "hxd Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://awbk.us.kg', label: '博客' },
    { link: 'https://iaw.us.kg', label: '个人主页' },
    { link: 'https://dh.iaw.us.kg', label: '导航', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'google_monitor',
      name: '1',
      method: 'GET',
      target: 'https://qq965868345.serv00.net',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://qq965868345.serv00.net',
    },

 {
      id: 'google_monitor',
      name: '2',
      method: 'GET',
      target: 'https://cueiringhih.serv00.net/',
     tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://cueiringhih.serv00.net/',
    },

    {
      id: 'ssh_monitor',
      name: 'Oracle Monitor',
      method: 'TCP_PING',
      target: 'X.X.X.X:22',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },
  ],
  notification: {
  appriseApiServer: "https://jkjk-j6ihvv7k7-aw168s-projects.vercel.app/notify",
  recipientUrl: "tgram://8192371314:AAEA7iBRucgoYJD-hZ5VYGN9gYBNSws0dps/7753605277",
  // [Optional] timezone used in notification messages, default to "Etc/GMT"
  timeZone: "Asia/Shanghai",
  // [Optional] grace period in minutes before sending a notification
  // notification will be sent only if the monitor is down for N continuous checks after the initial failure
  // if not specified, notification will be sent immediately
  gracePeriod: 5,
},
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
