import React, { Dispatch, SetStateAction } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import SORT_TYPES from './../../constants/sortTypes';
import './DateSorter.scss';

type DateSorterProps = {
	sortType: string;
	onClick: Dispatch<SetStateAction<string>>;
};

const DateSorter: React.FC<DateSorterProps> = ({
	children,
	sortType,
	onClick,
}) => (
	<div className="DateSorter" data-testid="DateSorter">
		<button
			data-testid="button"
			className="DateSorter__button"
			type="button"
			value={sortType}
			onClick={(): void =>
				onClick(
					sortType === SORT_TYPES.ASCENDING
						? SORT_TYPES.DESCENDING
						: SORT_TYPES.ASCENDING
				)
			}
		>
			{children}: <strong>{sortType}</strong>
			<div className="DateSorter__icon">
				{sortType === SORT_TYPES.ASCENDING ? <UpOutlined /> : <DownOutlined />}
			</div>
		</button>
	</div>
);

export default DateSorter;
