# Drag & Drop

Set `draggable` and write bunch of codes to make drag & drop work.

```html
<n-tree
  block-line
  checkable
  draggable
  :data="data"
  :checked-keys="checkedKeys"
  :expanded-keys="expandedKeys"
  @drop="handleDrop"
  @update:checked-keys="handleCheckedKeysChange"
  @update:expanded-keys="handleExpandedKeysChange"
/>
```

```js
import { defineComponent, ref } from 'vue'

function createData (level = 4, baseKey = '') {
  if (!level) return undefined
  return Array.apply(null, { length: 6 - level }).map((_, index) => {
    const key = '' + baseKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel (level) {
  if (level === 4) return 'Out of Tao, One is born'
  if (level === 3) return 'Out of One, Two'
  if (level === 2) return 'Out of Two, Three'
  if (level === 1) return 'Out of Three, the created universe'
}

function findSiblingsAndIndex (node, nodes) {
  if (!nodes) return [null, null]
  for (let i = 0; i < nodes.length; ++i) {
    const siblingNode = nodes[i]
    if (siblingNode.key === node.key) return [nodes, i]
    const [siblings, index] = findSiblingsAndIndex(node, siblingNode.children)
    if (siblings) return [siblings, index]
  }
  return [null, null]
}

/**
 * The time complexity of the demo can be optimized,
 * but I'm too lazy to optimize it.
 */
export default defineComponent({
  setup () {
    const expandedKeysRef = ref([])
    const checkedKeysRef = ref([])
    const dataRef = ref(createData())

    return {
      data: dataRef,
      expandedKeys: expandedKeysRef,
      checkedKeys: checkedKeysRef,
      handleExpandedKeysChange (expandedKeys) {
        expandedKeysRef.value = expandedKeys
      },
      handleCheckedKeysChange (checkedKeys) {
        checkedKeysRef.value = checkedKeys
      },
      handleDrop ({ node, dragNode, dropPosition }) {
        const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(
          dragNode,
          dataRef.value
        )
        dragNodeSiblings.splice(dragNodeIndex, 1)
        if (dropPosition === 'inside') {
          if (node.children) {
            node.children.unshift(dragNode)
          } else {
            node.children = [dragNode]
          }
        } else if (dropPosition === 'before') {
          const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(
            node,
            dataRef.value
          )
          nodeSiblings.splice(nodeIndex, 0, dragNode)
        } else if (dropPosition === 'after') {
          const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(
            node,
            dataRef.value
          )
          nodeSiblings.splice(nodeIndex + 1, 0, dragNode)
        }
        dataRef.value = Array.from(dataRef.value)
      }
    }
  }
})
```
