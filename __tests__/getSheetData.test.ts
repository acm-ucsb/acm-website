import '@testing-library/jest-dom'
import { SheetName, getRawSheetData, getEventsData} from '@/apis/getSheetsData'
import { test } from '@jest/globals';

test.skip('Raw API request', async () => {
    const rawData = await getRawSheetData(SheetName.Events);
    console.log(rawData);
});

test.skip('API data', async () => {
    const data = await getEventsData();
    console.log(data);
})