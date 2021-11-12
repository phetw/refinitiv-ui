import type { CollectionComposer } from '@refinitiv-ui/utils/lib/collection.js';
import type { Item, ItemType, ItemData } from '../../item';
import '../../item/index.js';
import { Renderer } from '../renderer.js';

/**
 * Basic render context
 */
type Context = {
  multiple?: boolean;
}

/**
 * Renders list items as `ef-item` elements.
 * This is the default renderer for lists.
 */
export class ListRenderer extends Renderer {
  constructor (context?: unknown) {
    /**
     * Create and return render function
     */
    super((item: ItemData, composer: CollectionComposer<ItemData>, element?: HTMLElement) => {
      /**
       * Element to render
       */
      const el = (element || document.createElement('ef-item')) as Item;
      /**
       * Tooltip value to be used, if any.
       */
      const tooltip = composer.getItemPropertyValue(item, 'tooltip') as string;

      el.label = composer.getItemPropertyValue(item, 'label') as string;
      el.subLabel = composer.getItemPropertyValue(item, 'subLabel') as string;
      el.value = composer.getItemPropertyValue(item, 'value') as string;
      el.icon = composer.getItemPropertyValue(item, 'icon') as string;
      el.highlighted = composer.getItemPropertyValue(item, 'highlighted') === true;
      el.selected = composer.getItemPropertyValue(item, 'selected') === true;
      el.disabled = composer.getItemPropertyValue(item, 'disabled') === true;
      el.hidden = composer.getItemPropertyValue(item, 'hidden') === true;
      el.type = composer.getItemPropertyValue(item, 'type') as ItemType;
      el.multiple = !!context && (context as Context).multiple === true;
      tooltip ? el.setAttribute('title', tooltip) : el.removeAttribute('title');

      return el;
    });
  }
}