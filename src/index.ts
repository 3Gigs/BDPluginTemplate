import {hello} from "./other";
import BdAPi from "@bandagedbd/bdapi"

export class TemplatePlugin {
   start() {
      hello();
   }
   stop() {}

   load() {}
   observer() {}
}
