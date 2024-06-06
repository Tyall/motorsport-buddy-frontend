export interface RaceId {
    season: number;
    raceId: number;
}

export interface RaceEntrySimple {
    raceId: Record<string, RaceId>;
    date: Date;
    dateEnd : Date;
    country: string;
    countryIsoCode: string;
    eventName: string;
    eventDuration: number;
    trackImgUrl: string;
}

