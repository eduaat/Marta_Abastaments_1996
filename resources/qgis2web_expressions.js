// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return Math.round(values[0]);
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return Math.min(Math.max(values[0],values[1]),values[2]);
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return Math.floor(values[0]);
};

function fnc_ceil(values, context) {
    return Math.ceil(values[0]);
};

function fnc_pi(values, context) {
    return Math.PI;
};

function fnc_to_int(values, context) {
    var intVal = parseInt(values[0],10);
    if ( isNaN(intVal) ) { return false };
    return intVal;
};

function fnc_to_real(values, context) {
    var realVal = parseFloat(values[0]);
    if ( isNaN(realVal) ) { return false };
    return realVal;
};

function fnc_to_string(values, context) {
    return String(values[0]);
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return values[0] ? values[1] : values[2];
}

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return new Date().toISOString();
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toUpperCase();
};

function fnc_title(values, context) {
    if ( typeof values[0] != "string" ) { return false; }
    return values[0].toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

function fnc_trim(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return String(values[0]).trim();
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    if ( isNaN(values[0]) || !values[0]) { return null; } return String.fromCodePoint(values[0]);
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    if ( !values[0] ) { return null; } return String(values[0]).replace(RegExp(values[1]),values[2]);
};

function fnc_regexp_substr(values, context) {
    if ( !values[0] ) { return null; }
    return String(values[0]).match(RegExp(values[1]))[0];
};

function fnc_substr(values, context) {
    var length = values[2]
    if ( !values[0] || isNaN(values[1])) { return false; }
    return String(values[0]).substr(values[1], length);
};

function fnc_concat(values, context) {
    return values.join(''); 
};

function fnc_strpos(values, context) {
   if (!values[0] || !values[1]) {return null}
   return String(values[0]).indexOf(String(values[1]))+1;
};

function fnc_left(values, context) {
    return String(values[0]).substr(0, values[1]);
};

function fnc_right(values, context) {
     return String(values[0]).substr(0, values[1]);
};

function fnc_rpad(values, context) {
    return String(values[0]).padEnd(values[1], values[2]);
};

function fnc_lpad(values, context) {
    return String(values[0]).padStart(values[1], values[2]);
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Tuberias_AP8001000E35_1rule0_eval_expression(context) {
    // XARXA = 'IMPULSION' AND MATERIAL = 'FIBROCEMENTO' AND DIAMETRO  IN ('FIBROØ50', 'FIBROØ60', 'FIBROØ70', 'FIBROØ80', 'FIBROØ100', 'FIBROØ125', 'FIBROØ150', 'FIBROØ175', 'FIBROØ200', 'FIBROØ250', 'FIBROØ300', 'FIBROØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'FIBROCEMENTO')) && "'FIBRO\u00d850', 'FIBRO\u00d860', 'FIBRO\u00d870', 'FIBRO\u00d880', 'FIBRO\u00d8100', 'FIBRO\u00d8125', 'FIBRO\u00d8150', 'FIBRO\u00d8175', 'FIBRO\u00d8200', 'FIBRO\u00d8250', 'FIBRO\u00d8300', 'FIBRO\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'FIBROCEMENTO')) && "'FIBRO\u00d850', 'FIBRO\u00d860', 'FIBRO\u00d870', 'FIBRO\u00d880', 'FIBRO\u00d8100', 'FIBRO\u00d8125', 'FIBRO\u00d8150', 'FIBRO\u00d8175', 'FIBRO\u00d8200', 'FIBRO\u00d8250', 'FIBRO\u00d8300', 'FIBRO\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule1_eval_expression(context) {
    // XARXA = 'IMPULSION' AND MATERIAL = 'FUNDICION' AND DIAMETRO  IN ('FUNDØ40', 'FUNDØ60', 'FUNDØ80', 'FUNDØ100', 'FUNDØ125', 'FUNDØ150', 'FUNDØ175', 'FUNDØ200', 'FUNDØ250', 'FUNDØ300', 'FUNDØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'FUNDICION')) && "'FUND\u00d840', 'FUND\u00d860', 'FUND\u00d880', 'FUND\u00d8100', 'FUND\u00d8125', 'FUND\u00d8150', 'FUND\u00d8175', 'FUND\u00d8200', 'FUND\u00d8250', 'FUND\u00d8300', 'FUND\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'FUNDICION')) && "'FUND\u00d840', 'FUND\u00d860', 'FUND\u00d880', 'FUND\u00d8100', 'FUND\u00d8125', 'FUND\u00d8150', 'FUND\u00d8175', 'FUND\u00d8200', 'FUND\u00d8250', 'FUND\u00d8300', 'FUND\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule2_eval_expression(context) {
    // XARXA = 'IMPULSION' AND MATERIAL = 'PVC' AND DIAMETRO  IN ('PVCØ32', 'PVCØ63', 'PVCØ75', 'PVCØ90', 'PVCØ110', 'PVCØ140', 'PVCØ160', 'PVCØ200', 'PVCØ250', 'PVCØ50', 'PVCØ125', 'PVCØ40', 'PVCØ180', 'PVCØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'PVC')) && "'PVC\u00d832', 'PVC\u00d863', 'PVC\u00d875', 'PVC\u00d890', 'PVC\u00d8110', 'PVC\u00d8140', 'PVC\u00d8160', 'PVC\u00d8200', 'PVC\u00d8250', 'PVC\u00d850', 'PVC\u00d8125', 'PVC\u00d840', 'PVC\u00d8180', 'PVC\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'PVC')) && "'PVC\u00d832', 'PVC\u00d863', 'PVC\u00d875', 'PVC\u00d890', 'PVC\u00d8110', 'PVC\u00d8140', 'PVC\u00d8160', 'PVC\u00d8200', 'PVC\u00d8250', 'PVC\u00d850', 'PVC\u00d8125', 'PVC\u00d840', 'PVC\u00d8180', 'PVC\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule3_eval_expression(context) {
    // XARXA = 'IMPULSION' AND MATERIAL = 'PE' AND DIAMETRO  IN ('PEØ20', 'PEØ25', 'PEØ32', 'PEØ40', 'PEØ50', 'PEØ63', 'PEØ75', 'PEØ90', 'PEØ110', 'PEØ125', 'PEØ140', 'PEØ160', 'PEØ200', 'PEØ250', 'PEØ315', 'PEØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'PE')) && "'PE\u00d820', 'PE\u00d825', 'PE\u00d832', 'PE\u00d840', 'PE\u00d850', 'PE\u00d863', 'PE\u00d875', 'PE\u00d890', 'PE\u00d8110', 'PE\u00d8125', 'PE\u00d8140', 'PE\u00d8160', 'PE\u00d8200', 'PE\u00d8250', 'PE\u00d8315', 'PE\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'IMPULSION') && (feature.get('MATERIAL')  == 'PE')) && "'PE\u00d820', 'PE\u00d825', 'PE\u00d832', 'PE\u00d840', 'PE\u00d850', 'PE\u00d863', 'PE\u00d875', 'PE\u00d890', 'PE\u00d8110', 'PE\u00d8125', 'PE\u00d8140', 'PE\u00d8160', 'PE\u00d8200', 'PE\u00d8250', 'PE\u00d8315', 'PE\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule4_eval_expression(context) {
    // XARXA = 'DISTRIBUCION' AND MATERIAL = 'FIBROCEMENTO' AND DIAMETRO  IN ('FIBROØ50', 'FIBROØ60', 'FIBROØ70', 'FIBROØ80', 'FIBROØ100', 'FIBROØ125', 'FIBROØ150', 'FIBROØ175', 'FIBROØ200', 'FIBROØ250', 'FIBROØ300', 'FIBROØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'FIBROCEMENTO')) && "'FIBRO\u00d850', 'FIBRO\u00d860', 'FIBRO\u00d870', 'FIBRO\u00d880', 'FIBRO\u00d8100', 'FIBRO\u00d8125', 'FIBRO\u00d8150', 'FIBRO\u00d8175', 'FIBRO\u00d8200', 'FIBRO\u00d8250', 'FIBRO\u00d8300', 'FIBRO\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'FIBROCEMENTO')) && "'FIBRO\u00d850', 'FIBRO\u00d860', 'FIBRO\u00d870', 'FIBRO\u00d880', 'FIBRO\u00d8100', 'FIBRO\u00d8125', 'FIBRO\u00d8150', 'FIBRO\u00d8175', 'FIBRO\u00d8200', 'FIBRO\u00d8250', 'FIBRO\u00d8300', 'FIBRO\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule5_eval_expression(context) {
    // XARXA = 'DISTRIBUCION' AND MATERIAL = 'FUNDICION' AND DIAMETRO  IN ('FUNDØ40', 'FUNDØ60', 'FUNDØ80', 'FUNDØ100', 'FUNDØ125', 'FUNDØ150', 'FUNDØ175', 'FUNDØ200', 'FUNDØ250', 'FUNDØ300', 'FUNDØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'FUNDICION')) && "'FUND\u00d840', 'FUND\u00d860', 'FUND\u00d880', 'FUND\u00d8100', 'FUND\u00d8125', 'FUND\u00d8150', 'FUND\u00d8175', 'FUND\u00d8200', 'FUND\u00d8250', 'FUND\u00d8300', 'FUND\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'FUNDICION')) && "'FUND\u00d840', 'FUND\u00d860', 'FUND\u00d880', 'FUND\u00d8100', 'FUND\u00d8125', 'FUND\u00d8150', 'FUND\u00d8175', 'FUND\u00d8200', 'FUND\u00d8250', 'FUND\u00d8300', 'FUND\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule6_eval_expression(context) {
    // XARXA = 'DISTRIBUCION' AND MATERIAL = 'PVC' AND DIAMETRO  IN ('PVCØ20', 'PVCØ32', 'PVCØ63', 'PVCØ75', 'PVCØ90', 'PVCØ110', 'PVCØ140', 'PVCØ160', 'PVCØ200', 'PVCØ250', 'PVCØ50', 'PVCØ125', 'PVCØ40', 'PVCØ180', 'PVCØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'PVC')) && "'PVC\u00d820', 'PVC\u00d832', 'PVC\u00d863', 'PVC\u00d875', 'PVC\u00d890', 'PVC\u00d8110', 'PVC\u00d8140', 'PVC\u00d8160', 'PVC\u00d8200', 'PVC\u00d8250', 'PVC\u00d850', 'PVC\u00d8125', 'PVC\u00d840', 'PVC\u00d8180', 'PVC\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'PVC')) && "'PVC\u00d820', 'PVC\u00d832', 'PVC\u00d863', 'PVC\u00d875', 'PVC\u00d890', 'PVC\u00d8110', 'PVC\u00d8140', 'PVC\u00d8160', 'PVC\u00d8200', 'PVC\u00d8250', 'PVC\u00d850', 'PVC\u00d8125', 'PVC\u00d840', 'PVC\u00d8180', 'PVC\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule7_eval_expression(context) {
    // XARXA = 'DISTRIBUCION' AND MATERIAL = 'PE' AND DIAMETRO  IN ('PEØ20', 'PEØ25', 'PEØ32', 'PEØ40', 'PEØ50', 'PEØ63', 'PEØ75', 'PEØ90', 'PEØ110', 'PEØ125', 'PEØ180', 'PEØ140', 'PEØ160', 'PEØ200', 'PEØ250', 'PEØ315', 'PEØ¿?')

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'PE')) && "'PE\u00d820', 'PE\u00d825', 'PE\u00d832', 'PE\u00d840', 'PE\u00d850', 'PE\u00d863', 'PE\u00d875', 'PE\u00d890', 'PE\u00d8110', 'PE\u00d8125', 'PE\u00d8180', 'PE\u00d8140', 'PE\u00d8160', 'PE\u00d8200', 'PE\u00d8250', 'PE\u00d8315', 'PE\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    } else {
        return (((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'PE')) && "'PE\u00d820', 'PE\u00d825', 'PE\u00d832', 'PE\u00d840', 'PE\u00d850', 'PE\u00d863', 'PE\u00d875', 'PE\u00d890', 'PE\u00d8110', 'PE\u00d8125', 'PE\u00d8180', 'PE\u00d8140', 'PE\u00d8160', 'PE\u00d8200', 'PE\u00d8250', 'PE\u00d8315', 'PE\u00d8\u00bf?'".indexOf(feature.get('DIAMETRO') ) > -1 );
    }
}


function exp_Tuberias_AP8001000E35_1rule8_eval_expression(context) {
    // XARXA = 'DISTRIBUCION' AND MATERIAL = 'TUB DOBLE'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'TUB DOBLE'));
    } else {
        return ((feature.get('XARXA')  == 'DISTRIBUCION') && (feature.get('MATERIAL')  == 'TUB DOBLE'));
    }
}


function exp_Tuberias_AP8001000E35_1rule9_eval_expression(context) {
    // XARXA  IN ('IMPULSION', 'DISTRIBUCION') AND (MATERIAL IS NULL OR MATERIAL = '') AND (DIAMETRO IS NULL OR DIAMETRO = '')

    var feature = context.feature;
    
    if (feature.properties) {
        return (("'IMPULSION', 'DISTRIBUCION'".indexOf(feature.get('XARXA') ) > -1  && ((feature.get('MATERIAL')  === null) || (feature.get('MATERIAL')  == ''))) && ((feature.get('DIAMETRO')  === null) || (feature.get('DIAMETRO')  == '')));
    } else {
        return (("'IMPULSION', 'DISTRIBUCION'".indexOf(feature.get('XARXA') ) > -1  && ((feature.get('MATERIAL')  === null) || (feature.get('MATERIAL')  == ''))) && ((feature.get('DIAMETRO')  === null) || (feature.get('DIAMETRO')  == '')));
    }
}


function exp_Tuberias_AP8001000E35_1rule10_eval_expression(context) {
    // XARXA = 'neteja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('XARXA')  == 'neteja');
    } else {
        return (feature.get('XARXA')  == 'neteja');
    }
}


function exp_Tuberias_AP8001000E35_1rule11_eval_expression(context) {
    // XARXA = 'acometida'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('XARXA')  == 'acometida');
    } else {
        return (feature.get('XARXA')  == 'acometida');
    }
}


function exp_Tuberias_AP8001000E35_1rule12_eval_expression(context) {
    // XARXA = 'fraude'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('XARXA')  == 'fraude');
    } else {
        return (feature.get('XARXA')  == 'fraude');
    }
}


function exp_Filtros300_2rule0_eval_expression(context) {
    // ACCESORIO = 'FILTRO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'FILTRO');
    } else {
        return (feature.get('ACCESORIO')  == 'FILTRO');
    }
}


function exp_Filtros300_2rule1_eval_expression(context) {
    // ACCESORIO = 'FILTRO ETAP'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'FILTRO ETAP');
    } else {
        return (feature.get('ACCESORIO')  == 'FILTRO ETAP');
    }
}


function exp_Ventoses200_3rule0_eval_expression(context) {
    // ACCESORIO = 'VENTOSA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'VENTOSA');
    } else {
        return (feature.get('ACCESORIO')  == 'VENTOSA');
    }
}


function exp_Hidrante250R3200_4rule0_eval_expression(context) {
    // ACCESORIO = 'HIDRANTE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'HIDRANTE');
    } else {
        return (feature.get('ACCESORIO')  == 'HIDRANTE');
    }
}


function exp_Valvulas200_5rule0_eval_expression(context) {
    // ACCESORIO = 'VALVULA N/A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'VALVULA N/A');
    } else {
        return (feature.get('ACCESORIO')  == 'VALVULA N/A');
    }
}


function exp_Valvulas200_5rule1_eval_expression(context) {
    // ACCESORIO = 'VALVULA N/C'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'VALVULA N/C');
    } else {
        return (feature.get('ACCESORIO')  == 'VALVULA N/C');
    }
}


function exp_Reducctora250_6rule0_eval_expression(context) {
    // ACCESORIO = 'REDUCTORA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'REDUCTORA');
    } else {
        return (feature.get('ACCESORIO')  == 'REDUCTORA');
    }
}


function exp_Bombas150_7rule0_eval_expression(context) {
    // ACCESORIO = 'GRUPO DE PRESION'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'GRUPO DE PRESION');
    } else {
        return (feature.get('ACCESORIO')  == 'GRUPO DE PRESION');
    }
}


function exp_Depositos300_8rule0_eval_expression(context) {
    // ACCESORIO = 'DEPOSITO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'DEPOSITO');
    } else {
        return (feature.get('ACCESORIO')  == 'DEPOSITO');
    }
}


function exp_Depositos300_8rule1_eval_expression(context) {
    // ACCESORIO = 'DEPOSITO PE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'DEPOSITO PE');
    } else {
        return (feature.get('ACCESORIO')  == 'DEPOSITO PE');
    }
}


function exp_Depositos300_8rule2_eval_expression(context) {
    // ACCESORIO = 'DEPOSITO PE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'DEPOSITO PE');
    } else {
        return (feature.get('ACCESORIO')  == 'DEPOSITO PE');
    }
}


function exp_Captaciones300_9rule0_eval_expression(context) {
    // ACCESORIO = 'CAPTACION'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ACCESORIO')  == 'CAPTACION');
    } else {
        return (feature.get('ACCESORIO')  == 'CAPTACION');
    }
}


function exp_ContadoresSECTORIALrosas125_10rule0_eval_expression(context) {
    // ACCESORIO  IN ('CONTADOR', 'CONTADOR TELE-LECTURA')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'CONTADOR', 'CONTADOR TELE-LECTURA'".indexOf(feature.get('ACCESORIO') ) > -1 ;
    } else {
        return "'CONTADOR', 'CONTADOR TELE-LECTURA'".indexOf(feature.get('ACCESORIO') ) > -1 ;
    }
}