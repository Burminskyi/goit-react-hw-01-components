import styled from '@emotion/styled';

export const Table = styled.table`
  width: 400px;
  border-collapse: collapse;
`;

export const TableRaw = styled.tr`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #2a2a2a;
  &:nth-of-type(2n) {
    background: #f0f0f0; /* Цвет фона */
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border: 1px solid #2a2a2a;
  background-color: red;
  color: white;
`;
