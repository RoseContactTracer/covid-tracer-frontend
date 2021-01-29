export class Case {
  id: number;
  needs_transportation: boolean;
  quarantine_end_date: Date;
  symptomatic_start_date: Date;
  test_date: Date;
  contact_tracer: {
    id: number;
    user_id: number;
  };
  person: {
    id: number;
    first_name: string;
    rose_id: string;
    phone: string;
  };
  quarantine_location: {
    id: number;
    address: string;
    is_clean: boolean;
    is_full: boolean;
    room_identifier: string;
  };
}