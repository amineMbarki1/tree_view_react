import { useState } from "react";
import { ReactComponent as FolderOpen } from "./folder_open.svg";
import { ReactComponent as FolderClosed } from "./folder.svg";
import { ReactComponent as ExpandLess } from "./expand_less.svg";
import { ReactComponent as ExpandMore } from "./expand_more.svg";
import { ReactComponent as File } from "./file.svg";

export default function TreeView({ data }) {
  return (
    data && (
      <ul className="tree">
        {data.map((node, i) => (
          <TreeNode node={node} key={i} />
        ))}
      </ul>
    )
  );
}

function TreeNode({ node }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);
  if (!children || children.length === 0)
    return (
      <li className="tree__node">
        <ExpandLess className="tree__icon" />
        <File className="tree__icon" />
        {label}
      </li>
    );

  return (
    <>
      <li className="tree__node" onClick={() => setShowChildren(!showChildren)}>
        {showChildren ? (
          <ExpandLess className="tree__icon" />
        ) : (
          <ExpandMore className="tree__icon" />
        )}

        {showChildren ? (
          <FolderOpen className="tree__icon" />
        ) : (
          <FolderClosed className="tree__icon" />
        )}
        {label}
      </li>
      <ul>{showChildren && <TreeView data={children} />}</ul>
    </>
  );
}
