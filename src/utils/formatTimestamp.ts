import { format } from 'date-fns';

export function formatTimestamp(date: Date = new Date()): string {
    return format(date, 'dd-MM-yyyy hh:mm a').toLowerCase();
}
