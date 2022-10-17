import sumNested from "./sumNested";

test("sums nested arrays", () => {
  expect(sumNested([10, [2, 3, 6], [1, [100, [3, 4], 5]]])).toEqual(134);
  expect(sumNested([10, 90, [2, 3, [[[[[[6]]]]]]], [1, [100, [3, [4],10], 5]]])).toEqual(234);
  expect(sumNested([-5,0,[-50,3,[[[0]]]]])).toEqual(-52);
});
