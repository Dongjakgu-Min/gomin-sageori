import React, { useState } from 'react';
import styled from 'styled-components';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { dropdownProps } from '../types/type';

const DropdownCont = styled.div`
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  width: calc(100% - 30px);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  color: #777777;
  position: relative;
  z-index: 0;
`;

const DropdownMenu = styled.ul`
  border: 1px solid #b3b3b3;
  background-color: white;
  border-radius: 5px;
  width: calc(100% - 30px);
  position: absolute;
  padding: 0 15px;
  top: -17px;
  left: -1px;
  z-index: 1;
`;

const DropdownItem = styled.li`
  list-style: none;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Dropdown({ data }: dropdownProps) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <DropdownCont>
        종류 선택...
        <VscTriangleDown onClick={() => setMenuVisible(!menuVisible)} />
        {menuVisible && (
          <DropdownMenu>
            <DropdownItem key={-1}>
              랜덤
              <VscTriangleUp onClick={() => setMenuVisible(!menuVisible)} />
            </DropdownItem>
            {data.map((item) => {
              return <DropdownItem key={item.id}>{item.type}</DropdownItem>;
            })}
          </DropdownMenu>
        )}
      </DropdownCont>
    </>
  );
}

export default Dropdown;
