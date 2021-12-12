import { pagesToShow, mapPagesToPageItems, pageItems } from '../src/utils'

describe('Pagination', function () {
  describe('utils', function () {
    describe('#pagesToShow', function () {
      it('should work when less than 9 total pages', function () {
        expect(pagesToShow(1, 1)).toEqual([1])
        expect(pagesToShow(1, 2)).toEqual([1, 2])
        expect(pagesToShow(2, 2)).toEqual([1, 2])
        expect(pagesToShow(1, 3)).toEqual([1, 2, 3])
        expect(pagesToShow(2, 3)).toEqual([1, 2, 3])
        expect(pagesToShow(3, 3)).toEqual([1, 2, 3])
        expect(pagesToShow(1, 4)).toEqual([1, 2, 3, 4])
        expect(pagesToShow(2, 4)).toEqual([1, 2, 3, 4])
        expect(pagesToShow(3, 4)).toEqual([1, 2, 3, 4])
        expect(pagesToShow(4, 4)).toEqual([1, 2, 3, 4])
        expect(pagesToShow(1, 5)).toEqual([1, 2, 3, 4, 5])
        expect(pagesToShow(2, 5)).toEqual([1, 2, 3, 4, 5])
        expect(pagesToShow(3, 5)).toEqual([1, 2, 3, 4, 5])
        expect(pagesToShow(4, 5)).toEqual([1, 2, 3, 4, 5])
        expect(pagesToShow(5, 5)).toEqual([1, 2, 3, 4, 5])
        expect(pagesToShow(1, 6)).toEqual([1, 2, 3, 4, 5, 6])
        expect(pagesToShow(2, 6)).toEqual([1, 2, 3, 4, 5, 6])
        expect(pagesToShow(3, 6)).toEqual([1, 2, 3, 4, 5, 6])
        expect(pagesToShow(4, 6)).toEqual([1, 2, 3, 4, 5, 6])
        expect(pagesToShow(5, 6)).toEqual([1, 2, 3, 4, 5, 6])
        expect(pagesToShow(6, 6)).toEqual([1, 2, 3, 4, 5, 6])
        expect(pagesToShow(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(pagesToShow(2, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(pagesToShow(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(pagesToShow(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(pagesToShow(5, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(pagesToShow(6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(pagesToShow(7, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(pagesToShow(1, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(2, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(3, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(4, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(5, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(6, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(7, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(8, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(pagesToShow(1, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(2, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(3, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(4, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(5, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(6, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(7, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(8, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(pagesToShow(9, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
      })
      it('should work when totalPage is 10', function () {
        expect(pagesToShow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 10])
        expect(pagesToShow(2, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 10])
        expect(pagesToShow(3, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 10])
        expect(pagesToShow(4, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 10])
        expect(pagesToShow(5, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 10])
        expect(pagesToShow(6, 10)).toEqual([1, -2, 4, 5, 6, 7, 8, 9, 10])
        expect(pagesToShow(7, 10)).toEqual([1, -2, 4, 5, 6, 7, 8, 9, 10])
        expect(pagesToShow(8, 10)).toEqual([1, -2, 4, 5, 6, 7, 8, 9, 10])
        expect(pagesToShow(9, 10)).toEqual([1, -2, 4, 5, 6, 7, 8, 9, 10])
        expect(pagesToShow(10, 10)).toEqual([1, -2, 4, 5, 6, 7, 8, 9, 10])
      })
      it('should work when totalPage is 11', function () {
        expect(pagesToShow(1, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 11])
        expect(pagesToShow(2, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 11])
        expect(pagesToShow(3, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 11])
        expect(pagesToShow(4, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 11])
        expect(pagesToShow(5, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 11])
        expect(pagesToShow(6, 11)).toEqual([1, -2, 4, 5, 6, 7, 8, -1, 11])
        expect(pagesToShow(7, 11)).toEqual([1, -2, 5, 6, 7, 8, 9, 10, 11])
        expect(pagesToShow(8, 11)).toEqual([1, -2, 5, 6, 7, 8, 9, 10, 11])
        expect(pagesToShow(9, 11)).toEqual([1, -2, 5, 6, 7, 8, 9, 10, 11])
        expect(pagesToShow(10, 11)).toEqual([1, -2, 5, 6, 7, 8, 9, 10, 11])
        expect(pagesToShow(11, 11)).toEqual([1, -2, 5, 6, 7, 8, 9, 10, 11])
      })
    })
    describe('#mapPagesToPageItems', function () {
      it('should return corresponding items', function () {
        expect(mapPagesToPageItems([-2, -1, 1, 2], 1)).toEqual([
          {
            type: 'fastBackward',
            label: 'fastBackward',
            active: false
          },
          {
            type: 'fastForward',
            label: 'fastForward',
            active: false
          },
          {
            type: 'page',
            label: 1,
            active: true
          },
          {
            type: 'page',
            label: 2,
            active: false
          }
        ])
      })
    })
    describe('#pageItems', function () {
      it('should work', function () {
        expect(pageItems(6, 11)).toEqual([
          {
            type: 'page',
            label: 1,
            active: false
          },
          {
            type: 'fastBackward',
            label: 'fastBackward',
            active: false
          },
          {
            type: 'page',
            label: 4,
            active: false
          },
          {
            type: 'page',
            label: 5,
            active: false
          },
          {
            type: 'page',
            label: 6,
            active: true
          },
          {
            type: 'page',
            label: 7,
            active: false
          },
          {
            type: 'page',
            label: 8,
            active: false
          },
          {
            type: 'fastForward',
            label: 'fastForward',
            active: false
          },
          {
            type: 'page',
            label: 11,
            active: false
          }
        ])
      })
    })
  })
})
