# `combo-box/Filter`

## `Can Filter Data`

####   `Default filter filters data`

```html
<div part="input-wrapper">
  <ef-text-field
    part="input"
    role="textbox"
    tabindex="0"
    transparent=""
  >
  </ef-text-field>
  <div
    id="toggle-button"
    part="button button-toggle"
  >
    <ef-icon
      icon="down"
      part="icon icon-toggle"
    >
    </ef-icon>
  </div>
</div>
<ef-overlay-viewport>
</ef-overlay-viewport>
<ef-overlay
  first-resize-done=""
  no-autofocus=""
  no-focus-management=""
  no-overlap=""
  opened=""
  part="list"
  tabindex="-1"
  with-shadow=""
>
  <ef-list
    aria-multiselectable="false"
    id="internal-list"
    role="listbox"
  >
    <ef-item
      aria-selected="false"
      role="presentation"
      tabindex="-1"
      type="header"
    >
    </ef-item>
    <ef-item
      aria-selected="false"
      highlighted=""
      role="option"
      tabindex="0"
    >
    </ef-item>
    <ef-item
      aria-selected="false"
      role="option"
      tabindex="0"
    >
    </ef-item>
  </ef-list>
</ef-overlay>

```

```html
<div part="input-wrapper">
  <ef-text-field
    part="input"
    role="textbox"
    tabindex="0"
    transparent=""
  >
  </ef-text-field>
  <div
    id="toggle-button"
    part="button button-toggle"
  >
    <ef-icon
      icon="down"
      part="icon icon-toggle"
    >
    </ef-icon>
  </div>
</div>
<ef-overlay-viewport>
</ef-overlay-viewport>
<ef-overlay
  first-resize-done=""
  no-autofocus=""
  no-focus-management=""
  no-overlap=""
  opened=""
  part="list"
  tabindex="-1"
  with-shadow=""
>
  <ef-list
    aria-multiselectable="false"
    id="internal-list"
    role="listbox"
  >
    <ef-item
      aria-selected="false"
      role="presentation"
      tabindex="-1"
      type="header"
    >
    </ef-item>
    <ef-item
      aria-selected="false"
      highlighted=""
      role="option"
      tabindex="0"
    >
    </ef-item>
  </ef-list>
</ef-overlay>

```
