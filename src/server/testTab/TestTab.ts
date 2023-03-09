import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/testTab/index.html")
@PreventIframe("/testTab/config.html")
@PreventIframe("/testTab/remove.html")
export class TestTab {
}
