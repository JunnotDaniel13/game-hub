import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Order } from "../App";

interface Props {
  onSelectSortOrder: (data: { value: string; label: string }) => void;
  selectedOrder: Order | null;
}

function SortSelector({ onSelectSortOrder, selectedOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedOrder ? selectedOrder.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.label}
            value={sort.value}
            onClick={() => onSelectSortOrder(sort)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
