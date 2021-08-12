import { Cookie } from './Cookie';
import { ColourEnums } from './ColoursEnum';

export class SprinkleCookie extends Cookie {
  sprinkleColour: string;

  constructor(name: string, sprinkleColour: string) {
    super(name);
    this.sprinkleColour = sprinkleColour;
  }
}
