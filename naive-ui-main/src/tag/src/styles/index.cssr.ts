import { c, cB, cE, cM, cNotM } from '../../../_utils/cssr'

// vars:
// --bezier
// --border-radius
// --border
// --close-color
// --close-color-hover
// --close-color-pressed
// --close-margin
// --close-size
// --color
// --color-checkable
// --color-checked
// --color-checked-hover
// --color-checked-pressed
// --color-hover-checkable
// --color-pressed-checkable
// --font-size
// --height
// --opacity-disabled
// --padding
// --text-color
// --text-color-checkable
// --text-color-checked
// --text-color-hover-checkable
// --text-color-pressed-checkable
export default cB('tag', `
  white-space: nowrap;
  position: relative;
  box-sizing: border-box;
  cursor: default;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: var(--padding);
  border-radius: var(--border-radius);
  color: var(--text-color);
  background-color: var(--color);
  transition: 
    border-color .3s var(--bezier),
    background-color .3s var(--bezier),
    color .3s var(--bezier),
    box-shadow .3s var(--bezier),
    opacity .3s var(--bezier);
  line-height: 1;
  height: var(--height);
  font-size: var(--font-size);
`, [
  cE('border', `
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: inherit;
    border: var(--border);
    transition: border-color .3s var(--bezier);
  `),
  cE('avatar', `
    display: flex;
    margin-right: 6px;
  `),
  cE('close', `
    font-size: var(--close-size);
    margin: var(--close-margin);
    transition: color .3s var(--bezier);
    cursor: pointer;
  `),
  cM('round', `
    padding: 0 calc(var(--height) / 2);
    border-radius: calc(var(--height) / 2);
  `, [
    cE('avatar', `
      margin-left: calc((var(--height) - 8px) / -2);
    `)
  ]),
  cM('disabled', `
    cursor: not-allowed !important;
    opacity: var(--opacity-disabled);
  `),
  cM('checkable', `
    cursor: pointer;
    box-shadow: none;
    color: var(--text-color-checkable);
    background-color: var(--color-checkable);
  `, [
    cNotM('disabled', [
      c('&:hover', {
        backgroundColor: 'var(--color-hover-checkable)'
      }, [
        cNotM('checked', {
          color: 'var(--text-color-hover-checkable)'
        })
      ]),
      c('&:active', {
        backgroundColor: 'var(--color-pressed-checkable)'
      }, [
        cNotM('checked', {
          color: 'var(--text-color-pressed-checkable)'
        })
      ])
    ]),
    cM('checked', {
      color: 'var(--text-color-checked)',
      backgroundColor: 'var(--color-checked)'
    }, [
      cNotM('disabled', [
        c('&:hover', {
          backgroundColor: 'var(--color-checked-hover)'
        }),
        c('&:active', {
          backgroundColor: 'var(--color-checked-pressed)'
        })
      ])
    ])
  ])
])
