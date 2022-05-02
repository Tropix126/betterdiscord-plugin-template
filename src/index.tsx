import {
    React,
    findModuleByProps,
    showConfirmationModal
} from "betterdiscord/bdapi";

const { Button } = findModuleByProps("BorderColors");

export default class Plugin {
    start() {
        showConfirmationModal(<Button>Test</Button>);
    }
}