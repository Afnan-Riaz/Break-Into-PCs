
import Link from 'next/link';

const Breadcrumb = ({ currentUrl }) => {
  const pathSegments = currentUrl.split('/').filter((segment) => segment !== '');

  return (
    <nav className='text-white my-4 -ml-6'>
      <ol className="flex gap-4">
        <Link href={"/"}>Home&emsp;&gt;</Link>
        {pathSegments.map((segment, index) => (
          <li key={index} className="capitalize">
            {index === pathSegments.length - 1 ? (
              <span className='underline underline-offset-2'>{segment}</span>
            ) : (
              <Link className='capitalize' href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                {segment}&emsp;&gt;
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
