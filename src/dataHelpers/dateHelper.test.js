import { findMostMatchedMonth, changeTypeToDate } from './dateHelper'

test('findMostMatchedMonth', () => {
    const data = 'jenuar';
    const expected = 'january';
    expect(findMostMatchedMonth(data)).toBe(expected);
});

test('changeTypeToDate', () => {
    const data = '7. auguzt 2021';
    const expected = new Date('7 august 2021');
    expect(changeTypeToDate(data).getTime()).toBe(expected.getTime());
})