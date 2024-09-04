import { HolidayType } from "./holiday-type";

export class Holiday {
    idHoliday?: number;
    holidayType?: HolidayType;
    statusHoliday?: string;
    dateHoliday?: Date;
    dateHolidayEnd?: Date;
    hoursQuantityHoliday?: number
}
