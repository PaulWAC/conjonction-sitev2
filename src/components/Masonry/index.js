import React from 'react';

const buildColumns = (children, columnCount) =>
  children.reduce((result, child, index) => {
    const columnIndex = index % columnCount;
    if (!result[columnIndex]) {
      result[columnIndex] = [];
    }
    result[columnIndex].push(child);
    return result;
  }, []);

// Render Cell
const Cell = ({ columnGap, children }: { columnGap: number, children: any }) => (
  <div style={{ marginBottom: columnGap }}>{children}</div>
);

// Render Column
const Column = ({
  columnGap,
  children,
  columnIndex
}: {
  columnIndex: number,
  columnGap: number,
  children: any
}) => <div style={{ marginLeft: `${columnIndex > 0 ? columnGap : 0}px`, flex: 1 }}>{children}</div>;


const MasonryLayout = ({ columnGap, columnCount, children }) => {
  // Divide children into columns
  const columns = buildColumns(children, columnCount);
  
  return (
    <div style={{ display: 'flex' }}>
      {_.map(columns, (column, index) => (
        <Column {...{ columnGap, columnIndex: index }}>
          {column.map(element => (
            <Cell>{element}</Cell>
          ))}
        </Column>
      ))}
    </div>
  );
};