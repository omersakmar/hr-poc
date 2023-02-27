import listData from "../api/list-data.json";

export const numberOfGroupElements: number = 4;

const list: any = listData;

export const listDataRows = list.Row.map((item: object) => item);

interface Badge {
  lookupId: number;
  lookupValue: string;
}

interface Praise {
  Badge: Badge[];
  PraiseRating: string;
}

interface LookupValueStats {
  lookupValue: string;
  count: number;
  averagePraiseRating: number;
}

// count the occurrences of each lookupValue
// and compute the average PraiseRating for each lookupValue

export const computeLookupValueStats = (
  praises: Praise[]
): LookupValueStats[] => {
  const lookupValueMap = praises.reduce((map: any, praise: Praise) => {
    const lookupValue = praise.Badge[0].lookupValue;
    const lookupId = praise.Badge[0].lookupId;

    if (!map[lookupValue]) {
      map[lookupValue] = {
        count: 0,
        totalPraiseRating: 0,
      };
    }

    const praiseRating = parseInt(praise.PraiseRating, 10);
    map[lookupValue].lookupId = lookupId;
    map[lookupValue].count++;
    map[lookupValue].totalPraiseRating += praiseRating;

    return map;
  }, {});

  const lookupValueStats: LookupValueStats[] = Object.keys(lookupValueMap).map(
    (lookupValue) => {
      const { count, totalPraiseRating, lookupId } =
        lookupValueMap[lookupValue];
      const averagePraiseRating = totalPraiseRating / count;

      return {
        lookupValue,
        count,
        averagePraiseRating,
        lookupId,
      };
    }
  );

  return lookupValueStats;
};

export const badgeCountAndAverage = computeLookupValueStats(listDataRows);

// split the array into chunks of 4

function* chunks<T>(arr: T[], n: number): Generator<T[], void> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
export const resultedArr = [...chunks(badgeCountAndAverage, 4)];

// total amount of badges

export const badgesTotalAmount = list.Row.reduce(
  (sum: number, { Badge }: any) => (Badge !== undefined ? ++sum : sum),
  0
);
