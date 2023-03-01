import moment from "moment";
import "moment/locale/tr";
import { ListDataRow } from "../service";
export const numberOfGroupElements: number = 4;

export const listDataRows = ListDataRow.map((item: object) => item);

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

export function* chunks<T>(arr: T[], n: number): Generator<T[], void> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
export const chunkedBadgeInformation = [...chunks(badgeCountAndAverage, 4)];

// total amount of badges

export const badgesTotalAmount = ListDataRow.reduce(
  (sum: number, { Badge }: any) => (Badge !== undefined ? ++sum : sum),
  0
);

// remove numbers and special characters

export function cleanStr(str: string): string {
  return str.replace(/[^\p{L}\s]/gu, "").replace(/\d+/g, "");
}

// convert date to locale

export const convertDateToLocale = (date: string) => {
  const dateLocal = moment.utc(date).local();
  const currentTime = moment();
  moment.locale("tr)");
  let formattedDate = "";
  if (dateLocal.isSame(currentTime, "day")) {
    formattedDate = dateLocal.format("HH:mm") + "'de Gönderildi";
  } else if (dateLocal.isSame(currentTime.clone().subtract(1, "day"), "day")) {
    formattedDate = "Dün, " + dateLocal.format("HH:mm") + "'de Gönderildi";
  } else {
    formattedDate =
      dateLocal.format("D MMMM YYYY [tarihinde], HH:mm") + "'de Gönderildi";
  }
  return formattedDate;
};

// get the rewarded badge's ID based on JSON data

export const getFirstTwoNumbers = (input: string) => {
  if (/^\d{2}/.test(input)) {
    return input.slice(0, 2);
  } else {
    return input.charAt(0);
  }
};
