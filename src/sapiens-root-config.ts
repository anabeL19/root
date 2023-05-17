import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

// registerApplication({
//   name: "@sapiens/app1",
//   app: () => System.import<LifeCycles>("http://localhost:4100/main.js"),
//   activeWhen: location => location.hash.startsWith('#/app-1'),
// });

// registerApplication({
//   name: "@sapiens/app2",
//   app: () => System.import<LifeCycles>("http://localhost:8080/sapiens-app2.js"),
//   activeWhen: location => location.hash.startsWith('#/app-2'),
// });

const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

start({
  urlRerouteOnly: true,
});
