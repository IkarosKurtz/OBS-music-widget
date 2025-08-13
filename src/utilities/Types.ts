import * as z from 'zod';

export const SizeSchema = z.enum(['extralarge', 'large', 'medium', 'small']);
export type Size = z.infer<typeof SizeSchema>;

export const AttrSchema = z.object({
  user: z.string(),
  totalPages: z.string(),
  page: z.string(),
  perPage: z.string(),
  total: z.string()
});
export type Attr = z.infer<typeof AttrSchema>;

export const AlbumSchema = z.object({
  mbid: z.string(),
  '#text': z.string()
});
export type Album = z.infer<typeof AlbumSchema>;

export const DateClassSchema = z.object({
  uts: z.string(),
  '#text': z.string()
});
export type DateClass = z.infer<typeof DateClassSchema>;

export const ImageSchema = z.object({
  size: SizeSchema,
  '#text': z.string()
});
export type Image = z.infer<typeof ImageSchema>;

export const TrackSchema = z.object({
  artist: AlbumSchema,
  streamable: z.string(),
  image: z.array(ImageSchema),
  mbid: z.string(),
  album: AlbumSchema,
  name: z.string(),
  url: z.string(),
  date: DateClassSchema
});

export type Track = z.infer<typeof TrackSchema>;

export const RecenttracksSchema = z.object({
  track: z.array(TrackSchema),
  '@attr': AttrSchema
});
export type Recenttracks = z.infer<typeof RecenttracksSchema>;

export const LastFmSchema = z.object({
  recenttracks: RecenttracksSchema
});
export type LastFm = z.infer<typeof LastFmSchema>;

// =======================================================

export const LinkSchema = z.object({
  '#text': z.string(),
  rel: z.string(),
  href: z.string()
});
export type Link = z.infer<typeof LinkSchema>;

export const ArtistElementSchema = z.object({
  name: z.string(),
  url: z.string(),
  image: z.array(ImageSchema)
});
export type ArtistElement = z.infer<typeof ArtistElementSchema>;

export const StatsSchema = z.object({
  listeners: z.string(),
  playcount: z.string()
});
export type Stats = z.infer<typeof StatsSchema>;

export const TagSchema = z.object({
  name: z.string(),
  url: z.string()
});
export type Tag = z.infer<typeof TagSchema>;

export const LinksSchema = z.object({
  link: LinkSchema
});
export type Links = z.infer<typeof LinksSchema>;

export const SimilarSchema = z.object({
  artist: z.array(ArtistElementSchema)
});
export type Similar = z.infer<typeof SimilarSchema>;

export const TagsSchema = z.object({
  tag: z.array(TagSchema)
});
export type Tags = z.infer<typeof TagsSchema>;

export const BioSchema = z.object({
  links: LinksSchema,
  published: z.string(),
  summary: z.string(),
  content: z.string()
});
export type Bio = z.infer<typeof BioSchema>;

export const LastFmArtistResponseArtistSchema = z.object({
  name: z.string(),
  mbid: z.string(),
  url: z.string(),
  image: z.array(ImageSchema),
  streamable: z.string(),
  ontour: z.string(),
  stats: StatsSchema,
  similar: SimilarSchema,
  tags: TagsSchema,
  bio: BioSchema
});
export type LastFmArtistResponseArtist = z.infer<
  typeof LastFmArtistResponseArtistSchema
>;

export const LastFmArtistResponseSchema = z.object({
  artist: LastFmArtistResponseArtistSchema
});
export type LastFmArtistResponse = z.infer<typeof LastFmArtistResponseSchema>;

export interface TrackData {
  artist: string;
  cover: string;
  title: string;
}
