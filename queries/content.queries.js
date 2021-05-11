import { gql } from "@apollo/client";

export const GET_IMAGE = gql`
	query GetImagesbyPublicId($publicId: ID!) {
		cloudinaryImage(publicId: $publicId) {
			url
			assetId
			bytes
			format
			publicId
		}
	}
`;

export const GET_IMAGES = gql`
	query GetImages {
		cloudinaryImages {
			url
			assetId
			bytes
			format
			publicId
		}
	}
`;
