import { cB, c, cM, cE } from '../../../../_utils/cssr'
import fadeInTransition from '../../../../_styles/transitions/fade-in.cssr'

// vars:
// --scrollbar-bezier
// --scrollbar-color
// --scrollbar-color-hover
// --scrollbar-width
// --scrollbar-height
// --scrollbar-border-radius
export default cB('scrollbar', `
  overflow: hidden;
  position: relative;
  z-index: auto;
  height: 100%;
  width: 100%;
`, [
  c('>', [
    cB('scrollbar-container', `
      width: 100%;
      overflow: scroll;
      height: 100%;
      max-height: inherit;
      scrollbar-width: none;
    `, [
      c('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', `
        width: 0;
        height: 0;
        display: none;
      `),
      c('>', [
        cB('scrollbar-content', `
          box-sizing: border-box;
          min-width: 100%;
        `)
      ])
    ]),
    cB('scrollbar-rail', `
      position: absolute;
      pointer-events: none;
      user-select: none;
    `, [
      cM('horizontal', `
        left: 2px;
        right: 2px;
        bottom: 4px;
        height: var(--scrollbar-height);
      `, [
        c('>', [
          cE('scrollbar', `
            height: var(--scrollbar-height);
            border-radius: var(--scrollbar-border-radius);
            right: 0;
          `)
        ])
      ]),
      cM('vertical', `
        right: 4px;
        top: 2px;
        bottom: 2px;
        width: var(--scrollbar-width);
      `, [
        c('>', [
          cE('scrollbar', `
            width: var(--scrollbar-width);
            border-radius: var(--scrollbar-border-radius);
            bottom: 0;
          `)
        ])
      ]),
      cM('disabled', [
        c('>', [
          cE('scrollbar', {
            pointerEvents: 'none'
          })
        ])
      ]),
      c('>', [
        cE('scrollbar', `
          position: absolute;
          cursor: pointer;
          pointer-events: all;
          background-color: var(--scrollbar-color);
          transition: background-color .2s var(--scrollbar-bezier);
        `, [
          fadeInTransition(),
          c('&:hover', {
            backgroundColor: 'var(--scrollbar-color-hover)'
          })
        ])
      ])
    ])
  ])
])
