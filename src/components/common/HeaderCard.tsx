import { Card, Typography } from "@mui/material";

type HeaderCardProps = {
  title: string;
  count: number;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
};

const HeaderCard = ({
  title,
  count,
  index,
  isSelected,
  onSelect,
}: HeaderCardProps) => {
  return (
    <Card
      variant="elevation"
      onClick={() => onSelect(index)}
      sx={{
        justifyContent: "flex-start",
        p: "0.5rem 1rem",
        mb: ".6rem",
        width: "100%",
        cursor: "pointer",
        minWidth: "140px",
        maxWidth: "180px",
        flexWrap: "wrap",
        borderBottom: isSelected ? "3px solid #084ed6" : "none",
        transform: isSelected ? "scale(1.12)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <Typography variant="caption" fontWeight={300} fontSize={12}>{title}</Typography>
      <Typography mt="0.5rem" variant="h5">{count}</Typography>
    </Card>
  );
};

export default HeaderCard;
