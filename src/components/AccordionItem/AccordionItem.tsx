import { Accordion, AccordionSummary } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/system";
import { FC, useState } from "react";

interface Props {
  item: { title: string; expanded_description: string[] };
}

const CustomAccordion = styled(Accordion)({
  position: "static",
  width: "100%",
  padding: "20px 24px",
  boxShadow: "none",
  "@media (max-width: 425px)": {
    padding: "16px",
  },
});

const CustomAccordionSummary = styled(AccordionSummary)({
  display: "flex",
  gap: 16,
  padding: 0,
});

const CustomAccordionDetails = styled(AccordionDetails)({
  padding: "16px 0 0",
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AccordionItem: FC<Props> = ({ item }) => {
  const { title, expanded_description } = item;

  const [expanded, setExpanded] = useState<boolean>(false);
  
  const handleAccordionChange = () => {
    setExpanded(prev => !prev);
  };

  return (
    <CustomAccordion
      style={{
        borderRadius: 0,
        background: expanded ? "rgba(18, 227, 156, 0.25)" : "#F4F4F4",
        transition: "background 0.3s",
      }}
      onChange={handleAccordionChange}
    >
      <CustomAccordionSummary
        expandIcon={
          <button className="bg-primary-green size-8 rounded-full flex items-center justify-center text-white">
            {expanded ? <MinusIcon /> : <PlusIcon />}
          </button>
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="w-full flex flex-col gap-4">
          <p className="sm:text-xl text-primary-text-100 font-medium">{title}</p>
        </div>
      </CustomAccordionSummary>
      <CustomAccordionDetails>
        {expanded_description.map((item, index) => (
          <p key={index} className="text-primary-text-100 font-medium leading-[150%]">{item}</p>
        ))}
      </CustomAccordionDetails>
    </CustomAccordion>
  );
};

export default AccordionItem;
