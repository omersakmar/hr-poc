import { badgeTitles } from "../api/badge-titles";
import listData from "../api/list-data.json";

export const countOccurrences = (arr: Array<object>, value: string) => {
  let count = 0;
  let lookupId = 0;
  arr.forEach((obj: any) => {
    if (
      obj.Badge &&
      obj.Badge.some(
        (badge: any) => badge.lookupValue.toLowerCase() === value.toLowerCase()
      )
    ) {
      count++;
      lookupId = obj.Badge[0].lookupId;
    }
  });
  return count > 0 ? { count, lookupId } : { count: 0, lookupId: 0 };
};

export const numberOfGroupElements: number = 4;

const list: any = listData;

const listDataRows = list.Row.map((item: object) => item);

export const badgeOccurrences: object[] = badgeTitles
  .map((value) => ({
    value,
    ...countOccurrences(listDataRows, value),
  }))
  .filter(({ count }) => count > 0);

export const filterBadgeOccurrences = (badgeInfo: object[]) => {
  return badgeInfo.reduce((resultArray: any, item: any, index: any) => {
    const chunkIndex = Math.floor(index / numberOfGroupElements);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};
