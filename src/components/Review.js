import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { people } from "../Data/data";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { image, name, text, job } = people[index];

	const checkIndex = (number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}

		return number;
	};

	const nextPerson = useCallback(() => {
		setIndex((index) => {
			const newindex = index + 1;
			return checkIndex(newindex);
		});
	});

	const prevPerson = useCallback(() => {
		setIndex((index) => {
			const newindex = index - 1;
			return checkIndex(newindex);
		});
	});

	useEffect(() => {
		nextPerson();
		prevPerson();
	}, [nextPerson, prevPerson]);
	return (
		<article className="reviewcard">
			<div className="imgContainer">
				<img src={image} alt={name} className="personImg" />
				<span className="Quate-icon">
					<FaQuoteRight />
				</span>
			</div>

			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="text">{text}</p>
			<div className="btn-can">
				<button
					onClick={() => {
						nextPerson();
					}}
					className="btn btn-arr"
				>
					<FaChevronLeft />
				</button>
				<button
					onClick={() => {
						prevPerson();
					}}
					className="btn btn-arr"
				>
					<FaChevronRight />
				</button>
			</div>
		</article>
	);
};

export default Review;
