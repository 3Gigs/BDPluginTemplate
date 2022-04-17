import {hello} from "./other";
import BdAPi from "@bandagedbd/bdapi"

class embedAll {
   start() {
      hello();
   }
   stop() {}

   load() {}
   observer() {}
}

module.exports = embedAll
