import {
    React,
    showToast
} from "betterdiscord/bdapi";

export default class Plugin {
    start() {
        showToast("Hello World!", {
            type: "info"
        });
    }
}