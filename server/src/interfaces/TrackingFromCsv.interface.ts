export interface CheckpointFromCsv {
	tracking_number: string;
	location: string;
	timestamp: string;
	status: string;
	status_text: string;
	status_details: string;
}

export interface TrackingFromCsv {
	orderNo: string;
	tracking_number: string;
	courier: string;
	street: string;
	zip_code: string;
	city: string;
	destination_country_iso3: string;
	email: string;
	articleNo: string;
	articleImageUrl: string;
	quantity: string;
	product_name: string;
}

export interface CsvData {
	trackings: TrackingFromCsv[];
	checkpoints: CheckpointFromCsv[];
}