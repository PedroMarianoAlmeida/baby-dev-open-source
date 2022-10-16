import Link from "next/link";

interface PostJobNewDataProps {
  href: string;
  notFoundText: string;
  updateText?: string;
  updateField?(): void;
}

const PostJobNewData = ({
  href,
  notFoundText,
  updateField,
  updateText,
}: PostJobNewDataProps) => {
  if (updateField && updateText)
    return (
      <>
        <Link href={href} passHref>
          <a target="_blank" rel="noopener noreferrer">
            {notFoundText}
          </a>
        </Link>
        <button onClick={updateField} type="button">
          {updateText}
        </button>
      </>
    );

  return (
    <>
      <Link href={href} passHref>
        <a target="_blank" rel="noopener noreferrer">
          {notFoundText}
        </a>
      </Link>
    </>
  );
};

export default PostJobNewData;
