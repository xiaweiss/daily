import { c, cB, cE, cM, cNotM } from '../../../_utils/cssr'
import iconSwitchTransition from '../../../_styles/transitions/icon-switch.cssr'
import fadeInHeightExpandTransition from '../../../_styles/transitions/fade-in-height-expand.cssr'

// vars:
// --arrow-color
// --bezier
// --font-size
// --node-border-radius
// --node-color-active
// --node-color-hover
// --node-color-pressed
// --node-text-color
// --node-text-color-disabled
export default cB('tree', `
  font-size: var(--font-size);
  outline: none;
`, [
  c('ul, li', `
    margin: 0;
    padding: 0;
    list-style: none;
  `),
  c('>', [
    cB('tree-node', [
      c('&:first-child', {
        marginTop: 0
      })
    ])
  ]),
  cB('tree-node-indent', `
    height: 0;
  `),
  cB('tree-motion-wrapper', [
    cM('expand', [
      fadeInHeightExpandTransition({
        duration: '0.2s'
      })
    ]),
    cM('collapse', [
      fadeInHeightExpandTransition({
        duration: '0.2s',
        reverse: true
      })
    ])
  ]),
  cB('tree-node-wrapper', `
    padding: 3px 0;
  `),
  cB('tree-node', `
    position: relative;
    display: flex;
    border-radius: var(--node-border-radius);
    transition: background-color .3s var(--bezier);
  `, [
    cM('highlight', [
      cB('tree-node-content', [
        cE('text', {
          borderBottomColor: 'var(--node-text-color-disabled)'
        })
      ])
    ]),
    cM('disabled', [
      cB('tree-node-content', `
        color: var(--node-text-color-disabled);
        cursor: not-allowed;
      `)
    ]),
    cNotM('disabled', [
      cM('selectable', [
        cB('tree-node-content', `
          cursor: pointer;
        `)
      ])
    ])
  ]),
  cM('block-node', [
    cB('tree-node-content', `
      width: 100%;
    `)
  ]),
  cNotM('block-line', [
    cB('tree-node', [
      cNotM('disabled', [
        cB('tree-node-content', [
          c('&:hover', {
            backgroundColor: 'var(--node-color-hover)'
          })
        ]),
        cM('selectable', [
          cB('tree-node-content', [
            c('&:active', {
              backgroundColor: 'var(--node-color-pressed)'
            })
          ])
        ]),
        cM('pending', [
          cB('tree-node-content', `
            background-color: var(--node-color-hover);
          `)
        ]),
        cM('selected', [
          cB('tree-node-content', {
            backgroundColor: 'var(--node-color-active)'
          })
        ])
      ])
    ])
  ]),
  cM('block-line', [
    cB('tree-node', [
      cNotM('disabled', [
        c('&:hover', {
          backgroundColor: 'var(--node-color-hover)'
        }),
        cM('selectable', [
          c('&:active', {
            backgroundColor: 'var(--node-color-pressed)'
          })
        ]),
        cM('pending', `
          background-color: var(--node-color-hover);
        `),
        cM('selected', {
          backgroundColor: 'var(--node-color-active)'
        })
      ]),
      cM('disabled', `
        cursor: not-allowed;
      `)
    ])
  ]),
  cB('tree-node-switcher', `
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    height: 24px;
    width: 24px;
    align-items: center;
    justify-content: center;
    transition: transform .15s var(--bezier);
    vertical-align: bottom;
  `, [
    cE('icon', `
      position: relative;
      height: 14px;
      width: 14px;
      display: flex;
      color: var(--arrow-color);
      transition: color .3s var(--bezier);
      font-size: 14px;
    `, [
      cB('icon', [iconSwitchTransition()]),
      cB('base-loading', `
        color: var(--loading-color);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      `, [
        iconSwitchTransition()
      ])
    ]),
    cM('hide', {
      visibility: 'hidden'
    }),
    cM('expanded', {
      transform: 'rotate(90deg)'
    })
  ]),
  cB('tree-node-checkbox', `
    display: inline-flex;
    height: 24px;
    width: 16px;
    vertical-align: bottom;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
  `),
  cB('tree-node-content', `
    position: relative;
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    box-sizing: border-box;
    line-height: 1.5;
    vertical-align: bottom;
    padding: 0 6px;
    cursor: default;
    border-radius: var(--node-border-radius);
    text-decoration-color: #0000;
    text-decoration-line: underline;
    color: var(--node-text-color);
    transition:
      color .3s var(--bezier),
      text-decoration-color .3s var(--bezier),
      background-color .3s var(--bezier),
      border-color .3s var(--bezier);
  `, [
    c('&:last-child', {
      marginBottom: 0
    }),
    cE('prefix', `
      display: inline-flex;
      margin-right: 8px;
    `),
    cE('text', `
      border-bottom: 1px solid #0000;
      transition: border-color .3s var(--bezier);
      flex-grow:1;
    `),
    cE('suffix', `
      display: inline-flex;
    `)
  ])
])
