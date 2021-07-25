import { Plugins } from "@capacitor/core";
const { TwitterPlugin } = Plugins;
export class Twitter {
    isLogged() {
        return TwitterPlugin.isLogged();
    }
    login() {
        return TwitterPlugin.login();
    }
    logout() {
        return TwitterPlugin.logout();
    }
}
//# sourceMappingURL=plugin.js.map