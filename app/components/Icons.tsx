type MaterialIconProps = {
  className?: string;
  fill?: boolean;
};

function MaterialIcon({
  name,
  className = "",
  fill = false,
}: MaterialIconProps & { name: string }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

export function ArrowRightIcon(props: MaterialIconProps) {
  return <MaterialIcon name="arrow_forward" {...props} />;
}

export function ArrowLeftIcon(props: MaterialIconProps) {
  return <MaterialIcon name="arrow_back" {...props} />;
}

export function MenuIcon(props: MaterialIconProps) {
  return <MaterialIcon name="menu" {...props} />;
}

export function CloseIcon(props: MaterialIconProps) {
  return <MaterialIcon name="close" {...props} />;
}

export function TruckIcon(props: MaterialIconProps) {
  return <MaterialIcon name="local_shipping" {...props} />;
}

export function BuildingIcon(props: MaterialIconProps) {
  return <MaterialIcon name="apartment" {...props} />;
}

export function SprayIcon(props: MaterialIconProps) {
  return <MaterialIcon name="cleaning_services" {...props} />;
}

export function ToolsIcon(props: MaterialIconProps) {
  return <MaterialIcon name="build" {...props} />;
}

export function FactoryIcon(props: MaterialIconProps) {
  return <MaterialIcon name="factory" {...props} />;
}

export function BedIcon(props: MaterialIconProps) {
  return <MaterialIcon name="bed" {...props} />;
}

export function LayersIcon(props: MaterialIconProps) {
  return <MaterialIcon name="layers" {...props} />;
}

export function ExpandIcon(props: MaterialIconProps) {
  return <MaterialIcon name="open_in_full" {...props} />;
}

export function ShoppingBagIcon(props: MaterialIconProps) {
  return <MaterialIcon name="shopping_bag" {...props} />;
}

export function MoneyBagIcon(props: MaterialIconProps) {
  return <MaterialIcon name="money_bag" {...props} />;
}

export function StarIcon(props: MaterialIconProps) {
  return <MaterialIcon name="star" fill {...props} />;
}

export function MapPinIcon(props: MaterialIconProps) {
  return <MaterialIcon name="location_on" {...props} />;
}

export function PhoneIcon(props: MaterialIconProps) {
  return <MaterialIcon name="call" {...props} />;
}

export function MailIcon(props: MaterialIconProps) {
  return <MaterialIcon name="mail" {...props} />;
}

export function InstagramIcon(props: MaterialIconProps) {
  return <MaterialIcon name="photo_camera" {...props} />;
}

export function WhatsAppIcon(props: MaterialIconProps) {
  return <MaterialIcon name="chat" {...props} />;
}

export function FacebookIcon(props: MaterialIconProps) {
  return <MaterialIcon name="groups" {...props} />;
}

export function TikTokIcon(props: MaterialIconProps) {
  return <MaterialIcon name="music_note" {...props} />;
}

export function DropIcon(props: MaterialIconProps) {
  return <MaterialIcon name="water_drop" {...props} />;
}
