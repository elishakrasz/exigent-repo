
import { urlForImage } from '../sanity/client';
import Image from 'next/image';
import { Bodoni_Moda, Lato } from 'next/font/google';
import { PortableText } from 'next-sanity';


const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const CustomPortableText = ({ value }: { value: any }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          // Custom rendering for "normal" blocks
          normal: ({ children }) => (
            <p className="text-sm text-gray-800 my-2">{children}</p>
          ),
        },
        marks: {
          // Custom rendering for "strong" (bold) text
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          // Custom rendering for "em" (italic) text
          em: ({ children }) => (
            <em className="italic text-gray-600">{children}</em>
          ),
        },
        listItem: ({ children }) => (
          <li className="text-xs text-gray-600 py-1">{children}</li>
        ),
      }}
    />
  );
};

const Test = ({person}) => {
  console.log('p', person)
    return (       
      <div className="mt-8 max-auto items-center justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-3xl mx-auto px-14">
        {/* Left Column */}
        <div className="mx-auto text-center col-span-2">
          <div className="w-full mx-auto">
            <div className={bodoni.className}>
              <div className="w-full md:flex justify-center">
                <Image
                  src={urlForImage(person.image).quality(100).url()}
                  alt={person.name}
                  width={150}
                  height={150}
                  className="object-contain w-3/5 mx-auto"
                />
              </div>
              <p className="text-xl font-normal mt-2">{person.name}</p>
              <div className={lato.className}>
                <p className="text-[14px] italic  text-gray-600 mt-2">
                  {person.title}
                </p>
                <p className="text-[14px] my-2 text-gray-600">
                  {person.subtitle}
                </p>
                <div className="flex items-center justify-center my-2 px-6">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="mx-2">
                    <Image
                      alt="linkedin in"
                      src="/assets/in.png"
                      width={12}
                      height={12}
                      className="pb-2"
                    />
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="col-span-3 max-w-full text-left ">
          {/* Render description using PortableText */}
          <div className="mt-2 min-h-52">
            {person.description?.map((block, index) => (
              <CustomPortableText key={block._key || index} value={[block]} />
            ))}
          </div>

          <div className="mt-6 flex flex-row space-x-2">
          {person.gallery.map((image, index) => (
            <div key={index} className="image-container">
              <Image
                src={urlForImage(image.asset).width(1800).height(375).url()}
                alt={image.caption || 'Gallery image'}
                width={400}
                height={100}
                // layout="responsive"
                className=''
              />

            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    )
}

export default Test