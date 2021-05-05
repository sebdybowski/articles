import React, { FC } from 'react';
import './Image.scss';
import { useImage } from 'react-image';

type ImageType = {
	url: string;
	alt: string;
	className?: string;
};

const Image: FC<ImageType> = ({ url, alt, className }) => {
	const { src } = useImage({ srcList: url });

	return <img src={src} alt={alt} className={className} data-testid="Image" />;
};

export default Image;
