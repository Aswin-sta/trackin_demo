export type Count = {
    id: number;
    type: string;
    count: number;
};

export type CountCardsProps = {
    counts: Count[];
    selectedCard: number | null;
    handleCardClick: (index: number) => void;
}