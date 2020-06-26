import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  description: string;
  price: number;
  onDelete: (id: string) => void;
}

const ProductRow: React.FC<Props> = ({
  id,
  title,
  description,
  price,
  onDelete,
}) => {
  return (
    <tr>
      <td className="border px-4 py-2">{title}</td>
      <td className="border px-4 py-2 whitespace-normal break-words">
        {description}
      </td>
      <td className="border px-4 py-2">{price}</td>
      <td className="border px-4 py-5 text-center">
        <NavLink
          to={`/products/manage/edit/${id}`}
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mb-3 mr-2"
        >
          Update
        </NavLink>

        <button
          type="button"
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-3 mb-3 mr-2"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
