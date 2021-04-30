import { QuarantineLocation } from "./quarantineLocation.model";
import { Tracer } from "./tracer.model";
import { User } from "./user.model";

export interface AssignedCase {
  id: number;
  person: User;
  testDate: String;
  symptomaticStartDate: String;
  quarantineEndDate: String;
  needsTransportation: boolean;
  contactTracer: Tracer;
  quarantineLocation: QuarantineLocation;
}