import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocumentRow({ id, fieldName, date }) {
  return (
    <div classNameZ="flex items-center p-4 rounded-lg hover:bg-gray-100">
      <Icon name="article" size="3xl" color="blue" />
      {id}
      <p className="flex-grow pl-5 w-10 pr-1- truncate">{fieldName}</p>
      <p className="pr-5 tex-sm">{date}</p>
    </div>
  );
}

export default DocumentRow;
