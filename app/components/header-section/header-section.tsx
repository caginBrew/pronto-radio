export interface IHeaderSection {
    button?: Array<{
        url: string
        label: string
        icon?: string // İkon string olarak tanımlanıyor
        }>;
}


const HeaderSection: React.FC<IHeaderSection> = ({
    button
}) => {
  return (
    <div className="flex">
        {button?.map((button, index) => (
        <a href={button.url} key={index} className="flex items-center space-x-2">
          <button className="flex text-white space-x-2 hover:bg-primary-hover transition-colors duration-400 px-3 py-2 rounded-lg">
            {button.icon && <span>{button.icon}</span>}
            <span>{button.label}</span>
          </button>
        </a>
      ))}
    </div>
  )
};
export default HeaderSection;