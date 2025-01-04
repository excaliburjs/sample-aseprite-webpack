import { ImageSource, Loader } from "excalibur";
import { AsepriteResource } from "@excaliburjs/plugin-aseprite";
import swordPath from './images/sword.png'; // Webpack asset/resource loader will find the image path
import beetlePath from './images/beetle.aseprite';

// It is convenient to put your resources in one place
export const Resources = {
  Sword: new ImageSource(swordPath),
  BeetleAseprite: new AsepriteResource(beetlePath)
} as const; // the 'as const' is a neat typescript trick to get strong typing on your resources. 
// So when you type Resources.Sword -> ImageSource

// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
